SELECT * FROM`users`;

SELECT * FROM challenges;
INSERT INTO Labels VALUES (4,"Test");
INSERT INTO challenges (title, instruction, starter, label) 
VALUES
  (
    "Sum All Numbers in a Range",
    "Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.","function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);",
    "Test"
  );
INSERT INTO challenges (title, instruction, starter, label) 
VALUES ("Pig Latin","Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an \"ay\".

If a word begins with a vowel you just add \"way\" to the end.

Input strings are guaranteed to be English words in all lowercase.","function translatePigLatin(str) {
  return str;
}

translatePigLatin(\"consonant\");","Test");

INSERT INTO challenges (title, instruction, starter, label) 
VALUES  ("Missing letters","Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return 0(zero).","function fearNotLetter(str) {
  return str;
}
","Test");

  SELECT * FROM tests;
  INSERT INTO tests (test,result,challenge_id) VALUES ("sumAll([1, 4])",10,3);
  INSERT INTO tests (test,result,challenge_id) VALUES ("sumAll([4, 1])",10,3);
  INSERT INTO tests (test,result,challenge_id) VALUES ("sumAll([5, 10])",45,3);
  INSERT INTO tests (test,result,challenge_id) VALUES ("sumAll([10, 5])",45,3);
  
  
  
INSERT INTO tests (test,result,challenge_id) VALUES ("translatePigLatin(\"california\")","aliforniacay",4);
  INSERT INTO tests (test,result,challenge_id) VALUES ("translatePigLatin(\"paragraphs\")","aragraphspay",4);
 INSERT INTO tests (test,result,challenge_id) VALUES ("translatePigLatin(\"glove\")","oveglay",4);
  INSERT INTO tests (test,result,challenge_id) VALUES ("translatePigLatin(\"algorithm\")","algorithmway",4);
    INSERT INTO tests (test,result,challenge_id) VALUES ("translatePigLatin(\"eight\")","eightway",4);
    
    
INSERT INTO tests (test,result,challenge_id) VALUES ("fearNotLetter(\"abce\")","d",5);    
INSERT INTO tests (test,result,challenge_id) VALUES ("fearNotLetter(\"abcdefghjklmno\")","i",5);  
INSERT INTO tests (test,result,challenge_id) VALUES ("fearNotLetter(\"stvwx\")","u",5);  
INSERT INTO tests (test,result,challenge_id) VALUES ("fearNotLetter(\"bcdf\")","e",5);  
INSERT INTO tests (test,result,challenge_id) VALUES ("fearNotLetter(\"abcdefghijklmnopqrstuvwxyz\")","0",5);  
        