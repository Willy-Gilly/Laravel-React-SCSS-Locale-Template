<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseAPIController;
use Illuminate\Http\File;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class LoginController extends BaseAPIController
{
    /**
     * Register api
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'login' => ['required', 'string', 'max:255','unique:user'],
            'pseudo' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:user'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', [$validator->errors()],403);
        }
        $user = User::create([
            'firstname' => $request->get('firstname'),
            'lastname' => $request->get('lastname'),
            'login' => $request->get('login'),
            'pseudo' => $request->get('pseudo'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->pseudo;
        return $this->sendResponse($success, 'User register successfully.');
    }

    /**
     * Login api
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->emailOrLogin, 'password' => $request->password]) || Auth::attempt(['login' => $request->emailOrLogin, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['name'] = $user->pseudo;
            return $this->sendResponse($success, 'User login successfully.');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised'],403);
        }
    }

    public function logout (Request $request): JsonResponse
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return $this->sendResponse($response, 'You have been successfully logged out!');
    }

    public function test (Request $request): JsonResponse
    {
        return $this->sendResponse(["i'm dumb"],"yes i am");
    }

    public function getUser(Request $request): JsonResponse
    {
        return $this->sendResponse($request->user(),"Logged user returned!");
    }

    public function uploadProfilePicture(Request $request): JsonResponse
    {
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Add validation rules as needed
        ]);

        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('public/profile', $fileName); // Store the file in the 'public/profile' directory
            // Update the user's profile_picture column with the file path
            $user = auth()->user(); // Assuming you have authentication set up

            if($user->profilePicture != null){
                $previousProfilePicture = $user->profilePicture;
                if(Storage::exists('profile/'.$previousProfilePicture)){
                    Storage::delete('profile/'.$previousProfilePicture);
                }
            }

            $user->profilePicture = $fileName;
            $user->save();

            return $this->sendResponse($fileName, 'Profile picture uploaded successfully');
        }

        return $this->sendError('File not found', ['File Not Found'], 400);
    }
}
