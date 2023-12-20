import java.io.*;

class Day1 {
    public static void main(String[] args) throws Exception {
        File input = new File("../inputs/day1/day1.txt");

        BufferedReader reader = new BufferedReader(new FileReader(input));
        System.out.println(partOne(reader.readLine()));
        System.out.println(partTwo(reader.readLine()));

        reader.close();
    }

    static Integer partOne(String paranthesis) {
        int counter = 0;

        for (int i = 0; i < paranthesis.length(); i++) {
            if (paranthesis.charAt(i) == ')') {
                counter--;
            } else {
                counter++;
            }
        }

        return counter;
    }

    static Integer partTwo (String paranthesis) {
        int index = 0;
        int counter = 0;

        for (int i = 0; i < paranthesis.length(); i++) {
            if (counter == -1) {
                index = i;
                break;
            }
            if (paranthesis.charAt(i) == ')') {
                counter--;
            } else {
                counter++;
            }
        }

        return index;
    }
}