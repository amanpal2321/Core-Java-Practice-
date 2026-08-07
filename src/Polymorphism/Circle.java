package Polymorphism;

import java.util.Scanner;

public class Circle extends TwoDShape{
	
	@Override
	public void area() {
			Scanner sc = new Scanner(System.in);
			System.out.print("Enter radius: " );
			double r = sc.nextDouble();
			
			double area = Math.PI *r*r;
			System.out.println("Area of Circle: "+area);
	}

}

 