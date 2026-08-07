package Polymorphism;
import java.util.Scanner;
public class Rectangle extends TwoDShape {
	
	@Override
	public void area() {
  Scanner sc =new Scanner(System.in);
  
  System.out.print("Enter Length: ");
  double l = sc.nextDouble();
  System.out.print("Enter Breadth: ");
  double b = sc.nextDouble();
  
  double area = l*b;
  
  System.out.println("Area of Rectangle: "+ area);
}
}