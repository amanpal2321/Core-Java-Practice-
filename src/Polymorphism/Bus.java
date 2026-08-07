package Polymorphism;

public class Bus extends Vehicle {
	@Override
	public void ride() {
		System.out.println("Open The Gate");
		System.out.println("Sit Inside Bus");
		System.out.println("Now Drive Car");
	}
}
