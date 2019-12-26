/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.espe.mpg.model;

/**
 *
 * @author DenniseSandoval
 */
public class mpg {
    private String car;
    private double miles;
    private double gallon;
    private double total;

    public mpg(String car, double miles, double gallon) {
        this.car = car;
        this.miles = miles;
        this.gallon = gallon;
        this.total=0;
    }

    /**
     * @return the car
     */
    public String getCar() {
        return car;
    }

    /**
     * @param car the car to set
     */
    public void setCar(String car) {
        this.car = car;
    }

    /**
     * @return the miles
     */
    public double getMiles() {
        return miles;
    }

    /**
     * @param miles the miles to set
     */
    public void setMiles(double miles) {
        this.miles = miles;
    }

    /**
     * @return the gallon
     */
    public double getGallon() {
        return gallon;
    }

    /**
     * @param gallon the gallon to set
     */
    public void setGallon(double gallon) {
        this.gallon = gallon;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public double getTotal() {
        return total;
    }
    
 
}
