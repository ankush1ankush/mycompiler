const stubs = {};

stubs.cpp = `#include <iostream>
#include <stdio.h>

using namespace std;

int main() {
  cout<<"Hello world!\\n";
  return 0;
}
`;

stubs.py = `print("Hello world!")`;

stubs.js=`console.log("hello")`

stubs.java=`
 import java.util.*;
 
// do not change the run class name

 class run {
   
    public static void main(String arg[])
    {
        System.out.println("hello");
    }

 }

`

export default stubs;