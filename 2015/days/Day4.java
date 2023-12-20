import java.io.*;
import java.security.MessageDigest;

public class Day4 {
    public static void main(String[] args) throws Exception {
        File input = new File("../inputs/day4/day4.txt");
        int partOne = 0;

        BufferedReader reader = new BufferedReader(new FileReader(input));

        partOne = partTwo(reader.readLine());

        System.out.println(partOne);

        reader.close();
    }

    static Integer partOne(String hex) throws Exception {
        int counter = 0;

        while (counter < Integer.MAX_VALUE) {
            byte[] bytesOfMessage = String.format("%s%s", hex, counter).getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] theMD5digest = md.digest(bytesOfMessage);

            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < theMD5digest.length; i++) {
                sb.append(Integer.toString((theMD5digest[i] & 0xff) + 0x100, 16).substring(1));
            }

            if (sb.toString().startsWith("00000")) {
                break;
            }
            counter++;
        }

        return counter;
    }

    static Integer partTwo(String hex) throws Exception {
        int counter = 0;

        while (counter < Integer.MAX_VALUE) {
            byte[] bytesOfMessage = String.format("%s%s", hex, counter).getBytes("UTF-8");
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] theMD5digest = md.digest(bytesOfMessage);

            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < theMD5digest.length; i++) {
                sb.append(Integer.toString((theMD5digest[i] & 0xff) + 0x100, 16).substring(1));
            }

            if (sb.toString().startsWith("000000")) {
                break;
            }
            counter++;
        }

        return counter;
    }
}
