package Polymorphism;
import java.util.Scanner;
public class Triangle extends TwoDShape {
	@Override
	public void area() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter Base of Triangle: ");
		double b = sc.nextDouble();
		System.out.print("Enter Height of Triangle: ");
		double h = sc.nextDouble();
		
		double area = 0.5 *b*h;
		
		System.out.println("Area of Traingle: "+area);
		}

}
