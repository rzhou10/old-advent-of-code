import java.io.*;

public class Day2 {
    public static void main(String[] args) throws Exception {
        File input = new File("../inputs/day2/day2.txt");
        int partOneSum = 0;
        int partTwoSum = 0;

        BufferedReader reader = new BufferedReader(new FileReader(input));
        String temp;
        while ((temp = reader.readLine()) != null) {
            // partOneSum += partOne(temp);
            partTwoSum += partTwo(temp);
        }

        System.out.println(partTwoSum);

        reader.close();
    }

    static Integer partOne(String areas) throws Exception {
        String[] values = areas.split("x", 5);

        Integer firstNum = Integer.parseInt(values[0]);
        Integer secondNum = Integer.parseInt(values[1]);
        Integer thirdNum = Integer.parseInt(values[2]);

        Integer firstArea = firstNum * secondNum;
        Integer secondArea = secondNum * thirdNum;
        Integer thirdArea = firstNum * thirdNum;
        Integer min = Math.min(Math.min(firstArea, secondArea), thirdArea);

        return min + (2 * firstArea) + (2 * secondArea) + (2 * thirdArea);
    }

    static Integer partTwo(String areas) throws Exception {
        String[] values = areas.split("x", 5);

        Integer firstNum = Integer.parseInt(values[0]);
        Integer secondNum = Integer.parseInt(values[1]);
        Integer thirdNum = Integer.parseInt(values[2]);

        Integer firstPerimeter = 2 * (firstNum + secondNum);
        Integer secondPerimeter = 2 * (thirdNum + secondNum);
        Integer thirdPerimeter = 2 * (firstNum + thirdNum);
        Integer smallest = Math.min(Math.min(firstPerimeter, secondPerimeter), thirdPerimeter);

        return smallest + (firstNum * secondNum * thirdNum);
    }

}
