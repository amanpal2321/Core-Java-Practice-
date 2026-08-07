package Polymorphism;

import java.util.Scanner;

public class Sqaure extends TwoDShape {
	
			@Override
		public void area() {
			Scanner sc = new Scanner(System.in);
			
			System.out.print("Enter Side of Square: ");
			double s = sc.nextDouble();
			
			double area = s*s;
			
			System.out.println("Area of Square: "+area);
			}

	}


