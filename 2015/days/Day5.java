import java.io.*;
import java.util.*;

public class Day5 {
    public static void main(String[] args) throws Exception {
        File input = new File("../inputs/day5/day5.txt");
        int sum = 0;

        BufferedReader reader = new BufferedReader(new FileReader(input));

        String temp;
        while ((temp = reader.readLine()) != null) {
            sum += partOne(temp);
        }

        System.out.println(sum);

        reader.close();
    }

    static Integer partOne(String str) {
        String[] vowels = {"a", "e", "i", "o", "u"};
        if (str.contains("ab") || str.contains("cd") || str.contains("pq") || str.contains("xy")) {
            return 0;
        }
        boolean hasDouble = false;
        int vowelCount = 0;

        for (int i = 0; i < str.length() - 1; i++) {
            if (str.charAt(i) == str.charAt(i + 1)) {
                hasDouble = true;
            }
        }

        for (int i = 0; i < str.length(); i++) {
            if (Arrays.stream(vowels).anyMatch(("" + str.charAt(i))::equals)) {
                vowelCount++;
            }
        }

        return hasDouble && vowelCount >= 3 ? 1 : 0;
    }
}
