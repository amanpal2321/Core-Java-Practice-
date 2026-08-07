package Inheritance;

public class Produvt1 {
String brand;
double price;
String color;

Produvt1(){
}
Produvt1(String brand, double price, String color){
	this.brand=brand;
	this.price=price;
	this.color=color;
}
Produvt1(double price, String color){
	this.price=price;
	this.color=color;
}
public String toString() {
	return "Product Brand is"+brand+"\nProduct Price is:"+price+"\nProduct Color is:"+color;
}
public String toString(double price, String color) {
	return "Product isPrice"+price+"\nProduct Color is:"+color;
}
	
}

