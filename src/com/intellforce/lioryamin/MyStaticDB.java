package com.intellforce.lioryamin;

public class MyStaticDB {
	public static Question[] questions = { 
			new Question("/img1.jpg", "Which animal you see in the picture ?",new String[]{"Cat" , "Dog", "Rabbit", "Horse" }),
			new Question("/img2.jpg", "What do you see in the picture ? ",new String[]{"The Sea" , "The Desert", "New-York City", "Rishon-Lezion City" }),
			new Question("/img3.jpg", "What color do you see in the picture ?",new String[]{"Blue" , "Green", "Yellow", "Red" }),
			new Question("/img4.jpg", "Which animal you see in the picture ?",new String[]{"Turtle" , "Pinguin", "Lion", "Frog" }),
			new Question("/img5.jpg", "which country does this flag belong to ?",new String[]{"USA" , "Israel", "France", "Germany" })
		};
}
