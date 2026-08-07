package Encapsulation;

public class driver {
	public static void main(String[] args) {
	System.out.println("===========Employ 1 Details========");
	Employ e1 = new Employ("Aman", 42000, 22);
	System.out.println("Employ Name is: "+e1.getName());
	System.out.println("Employ Salary is: "+e1.getSalary());
	System.out.println("Employ Age is: "+e1.getAge());
	
	
	System.out.println("===========Employ 2 Details========");
	Employ e2 = new Employ();
	e2.setName("deepak");
	e2.setSalary(54200);
	e2.setAge(60);
	
	System.out.println("Employ Name is: "+e2.getName());
	System.out.println("Employ Salary is: "+e2.getSalary());
	System.out.println("Employ Age is: "+e2.getAge());
	System.out.println("======================================");
}
}
