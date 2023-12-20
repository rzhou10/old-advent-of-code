import java.io.*;
import java.util.*;

public class Day3 {
    public static void main(String[] args) throws Exception {
        File input = new File("../inputs/day3/day3.txt");
        int partOne = 0;

        BufferedReader reader = new BufferedReader(new FileReader(input));

        partOne = partOne(reader.readLine());

        System.out.println(partOne);

        reader.close();
    }

    static Integer partOne(String directions) {
        Set<String> houses = calculatePath(directions);

        return houses.size() + 1;
    }

    static Integer partTwo(String directions) {
        String santaPath = "";
        String roboPath = "";

        for (int i = 0; i < directions.length(); i++) {
            if (i % 2 == 0) {
                santaPath += directions.charAt(i);
            } else {
                roboPath += directions.charAt(i);
            }
        }
        Set<String> santaHouses = calculatePath(santaPath);
        Set<String> roboHouses = calculatePath(roboPath);
        Set<String> allHouses = new HashSet<>();
        allHouses.addAll(santaHouses);
        allHouses.addAll(roboHouses);

        return allHouses.size();
    }

    static Set<String> calculatePath (String path) {
        Integer x = 0;
        Integer y = 0;
        Set<String> houses = new HashSet<>();

        for (int i = 0; i < path.length(); i++) {
            if (path.charAt(i) == '>') {
                x += 1;
                houses.add(String.format("%s,%s", x, y));
            } else if (path.charAt(i) == '<') {
                x -= 1;
                houses.add(String.format("%s,%s", x, y));
            } else if (path.charAt(i) == '^') {
                y += 1;
                houses.add(String.format("%s,%s", x, y));
            } else if (path.charAt(i) == 'v') {
                y -= 1;
                houses.add(String.format("%s,%s", x, y));
            }
        }

        return houses;
    }
}
