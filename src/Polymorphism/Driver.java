package Polymorphism;

public class Driver {
	public static void main(String[] args) {
		TwoDShape t=Service.selectAndGetTwoDShape()	;
		t.area();
		}
}
