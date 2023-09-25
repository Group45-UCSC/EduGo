// ignore_for_file: library_private_types_in_public_api, use_build_context_synchronously, prefer_const_constructors

import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  bool _passwordVisible = false;
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  Future<void> _login(BuildContext context) async {
    final String email = emailController.text;
    final String password = passwordController.text;

    // Make a POST request to login API
    final response = await http.post(
      Uri.parse('http://10.0.2.2:5000/edugo/user/login'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': email,
        'password': password,
      }),
    );

    if (response.statusCode == 200) {
      // Successfully logged in
      final Map<String, dynamic> data = jsonDecode(response.body);

      final bool loggedIn = data['Login'];
      final String role = data['role'];

      if (loggedIn) {
        // Navigate to the next screen or perform actions based on the user role
        if (role == 'driver') {
          // Navigate to the driver dashboard
          Navigator.pushNamed(context, '/home_d');
        } else if (role == 'parent') {
          // Navigate to the parent dashboard
          Navigator.pushNamed(context, '/home_p');
        }
      } else {
        // Handle login failure
        showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text('Login Failed'),
              content: Text('Invalid email or password. Please try again.'),
              actions: [
                TextButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                  child: Text('OK'),
                ),
              ],
            );
          },
        );
      }
    } else {
      // Handle errors
      showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Error'),
            content: Text('An error occurred while logging in.'),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // backgroundColor: Color(0xFFFF9900),
      backgroundColor: Colors.grey.shade200,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(height: 20),
              loginImg(),
              SizedBox(height: 50),      
              // LOGIN FORM
              textFieldEmail(),
              SizedBox(height: 16),
              textFieldPassword(),
              SizedBox(height: 8),
              changePassword(),
              SizedBox(height: 16),
              loginBtn(context),
            ],
          ),
        ),
      ),
    );
  }

  Padding loginBtn(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: GestureDetector(
        onTap: () => _login(context),
        child: Container(
          alignment: Alignment.center,
          width: double.infinity,
          height: 50,
          decoration: BoxDecoration(
            color: Color(0xFFFF9900),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Text(
            'Login',
            style: TextStyle(
              color: Colors.white,
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }

  Widget changePassword() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: Align(
        alignment: Alignment.centerRight,
        child: TextButton(
          onPressed: () {
            Navigator.pushNamed(context, '/change_password');
          },
          style: TextButton.styleFrom(
            foregroundColor: Color(0xFFFF9900),
          ),
          child: Text('Forgot Password?'),
        ),
      ),
    );
  }

  Widget textFieldPassword() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: Container(
        decoration: BoxDecoration(
          color: Color(0xFFFF9900),
          borderRadius: BorderRadius.circular(15),
        ),
        child: TextField(
          controller: passwordController,
          style: TextStyle(fontSize: 18, color: Colors.black),
          decoration: InputDecoration(
            prefixIcon: Icon(
              Icons.lock, 
              color: Colors.black
            ),
            contentPadding: EdgeInsets.symmetric(horizontal: 15, vertical: 15),
              hintText: 'Password',
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(
                  color: Color(0xffc5c5c5),
                  width: 2.0,
                ),
              ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide(
                color: Color(0xFFFF9900)
              ),
            ),
            filled: true,
            fillColor: Colors.white.withOpacity(0.5),
            suffixIcon: IconButton(
              icon: Icon(
                _passwordVisible ? Icons.visibility: Icons.visibility_off,
                color: Colors.black,
              ),
              onPressed: () {
                setState(() {
                  _passwordVisible = !_passwordVisible;
                });
              },
            ),
          ),
          obscureText: !_passwordVisible,
          cursorColor: Colors.black,
        ),
      ),
    );
  }

  Widget textFieldEmail() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: Container(
        decoration: BoxDecoration(
          color: Color(0xFFFF9900),
          borderRadius: BorderRadius.circular(15),
        ),
        child: TextField(
          controller: emailController,
          style: TextStyle(fontSize: 18, color: Colors.black),
          decoration: InputDecoration(
            prefixIcon: Icon(
              Icons.email, 
              color: Colors.black
            ),
            contentPadding: EdgeInsets.symmetric(horizontal: 15, vertical: 15),
            hintText: 'Email',
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide(
                color: Color(0xffc5c5c5),
                width: 2.0,
              ),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(10),
              borderSide: BorderSide(
                color: Color(0xFFFF9900)
              ),
            ),
            filled: true,
            fillColor: Colors.white.withOpacity(0.5),
          ),
          cursorColor: Colors.black,
        ),
      ),
    );
  }

  Padding loginImg() {
    return Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              child: Container(
                width: double.infinity,
                height: 300,
                decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/images/loginImage.jpg'),
                  fit: BoxFit.cover,
                ),
                ),
              ),
            );
  }
}
