package com.intellforce.lioryamin;

public class Question {
	private String image;
	private String question;
	private String[] answers;
	
	public Question(){
		
	}

	public Question(String image, String question, String[] answers) {
		this.image = image;
		this.question = question;
		this.answers = answers;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String[] getAnswers() {
		return answers;
	}

	public void setAnswers(String[] answers) {
		this.answers = answers;
	}

}
