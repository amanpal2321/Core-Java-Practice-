package Polymorphism;

public class DriverVehical {
	
	public static void main(String[] args) {
		Vehicle v =VehicleService.SelectandGetVehicle();
		 v.ride();
	}
	

}
