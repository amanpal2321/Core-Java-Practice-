package Polymorphism;

public class Car extends Vehicle {
	@Override
	public void ride() {
		System.out.println("Open The Gate");
		System.out.println("Sit Inside Car");
		System.out.println("Now Drive Car");
	}

}
