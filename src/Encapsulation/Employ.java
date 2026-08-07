package Encapsulation;
public class Employ {
	private String name;
	private double salary;
	private int age;
	Employ(){
	}
	Employ(String name, double salary, int age){
		this.name=name;
		this.salary=salary;
		this.age=age;
	}
	public void setName(String name) {
		if(name.length()>=2 &&  !name.isBlank())
			this.name=name;
		else
			System.out.println("Invalid Name");
	}
	
	public String getName() {
		return name;
	}
	public void setSalary(double salary) {
		if(salary>=10000 && salary<=2500000) 
			this.salary=salary;
		else
			System.out.println("Invalid Salary");
	}
	public double getSalary(){
		return salary;
	}
	public void setAge(int age) {
		if(age>=20 && age<=55)
			this.age=age;
		else
			System.out.println("Ivalid Age");
	}
	public int getAge() {
		
		return age;
		
	}
}
