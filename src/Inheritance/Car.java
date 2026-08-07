package Inheritance;

public class Car extends Vehical {
	int hp;
	int strock;
	
	Car(){
	}
	Car(String name, double price, String color, int hp, int strock){
		super(name, price, color);
		this.hp=hp;
		this.strock=strock;
	}
	public String toString() {
		return "Name is: "+ name + "\nprice is: "+ price+ "\ncolor is: "+color + "\nHorce Power is: "+hp+ "\nStrock is: "+strock;
	}
}
