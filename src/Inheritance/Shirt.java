package Inheritance;

public class Shirt extends Produvt1 {
String size;
String type;

Shirt(){
}
Shirt(String brand, double price, String color, String size, String type){
	super(brand,price,color);
	this.size=size;
	this.type=type;
}
public String toString() {
	return super.toString()+"\nProduct Size is:"+size+"\nProduct type is:"+type;
}
}
