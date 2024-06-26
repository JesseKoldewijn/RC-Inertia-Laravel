import { useEffect, useState } from "react";
import styles from "./AppLogo.module.css";

type AppLogoSvgProps = Omit<
  React.SVGProps<SVGSVGElement>,
  "xmlns" | "viewBox" | "width" | "height"
>;

interface AppLogoAnimatedProps extends AppLogoSvgProps {
  animated?: boolean;
  size?: number;
}

const AppLogoAnimated = ({ animated, size, ...rest }: AppLogoAnimatedProps) => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);

  useEffect(() => {
    if (animated) {
      const interval = setInterval(toggleActive, 1000);
      return () => clearInterval(interval);
    }
    console.log("AppLogo mounted", animated, isActive);
  }, [animated]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      {...rest}
    >
      <path
        d="M54,80.19H74a1.75,1.75,0,0,0,1.75-1.75V73.33A11.068,11.068,0,0,0,71.356,64.5a9.977,9.977,0,1,0-14.712,0A11.068,11.068,0,0,0,52.25,73.33v5.11A1.75,1.75,0,0,0,54,80.19ZM64,51.306a6.477,6.477,0,1,1-6.477,6.477A6.484,6.484,0,0,1,64,51.306ZM55.75,73.33a7.562,7.562,0,0,1,3.875-6.594,9.857,9.857,0,0,0,8.749,0A7.562,7.562,0,0,1,72.25,73.33v3.36H55.75Z"
        className={styles.appLogoElem1 + (isActive ? ` ${styles.appLogoElem1Active}` : "")}
      ></path>
      <path
        d="M118.858,21.442a9.977,9.977,0,1,0-14.716,0A11.079,11.079,0,0,0,99.75,30.28V35.39a1.75,1.75,0,0,0,1.75,1.75h20a1.75,1.75,0,0,0,1.75-1.75V30.28A11.079,11.079,0,0,0,118.858,21.442ZM111.5,8.25a6.477,6.477,0,1,1-6.477,6.478A6.485,6.485,0,0,1,111.5,8.25Zm8.25,25.39h-16.5V30.28a7.571,7.571,0,0,1,3.871-6.6,9.857,9.857,0,0,0,8.758,0,7.571,7.571,0,0,1,3.871,6.6Z"
        className={styles.appLogoElem2 + (isActive ? ` ${styles.appLogoElem2Active}` : "")}
      ></path>
      <path
        d="M78.667,62.25a1.738,1.738,0,0,0,1.077-.372l25.141-19.667a1.75,1.75,0,1,0-2.156-2.756L77.588,59.122a1.75,1.75,0,0,0,1.079,3.128Z"
        className={styles.appLogoElem3 + (isActive ? ` ${styles.appLogoElem3Active}` : "")}
      ></path>
      <path
        d="M6.5,37.14h20a1.75,1.75,0,0,0,1.75-1.75V30.28a11.079,11.079,0,0,0-4.392-8.839,9.977,9.977,0,1,0-14.716,0A11.079,11.079,0,0,0,4.75,30.28V35.39A1.75,1.75,0,0,0,6.5,37.14Zm10-28.89a6.477,6.477,0,1,1-6.477,6.478A6.485,6.485,0,0,1,16.5,8.25ZM8.25,30.28a7.571,7.571,0,0,1,3.871-6.6,9.857,9.857,0,0,0,8.758,0,7.571,7.571,0,0,1,3.871,6.6V33.64H8.25Z"
        className={styles.appLogoElem4 + (isActive ? ` ${styles.appLogoElem4Active}` : "")}
      ></path>
      <path
        d="M23.853,107.558a9.977,9.977,0,1,0-14.707,0,11.066,11.066,0,0,0-4.4,8.832v5.11a1.75,1.75,0,0,0,1.75,1.75h20a1.75,1.75,0,0,0,1.75-1.75v-5.11A11.066,11.066,0,0,0,23.853,107.558ZM16.5,94.361a6.477,6.477,0,1,1-6.477,6.477A6.484,6.484,0,0,1,16.5,94.361Zm8.25,25.389H8.25v-3.36a7.56,7.56,0,0,1,3.88-6.6,9.856,9.856,0,0,0,8.74,0,7.56,7.56,0,0,1,3.88,6.6Z"
        className={styles.appLogoElem5 + (isActive ? ` ${styles.appLogoElem5Active}` : "")}
      ></path>
      <path
        d="M118.853,107.558a9.977,9.977,0,1,0-14.707,0,11.066,11.066,0,0,0-4.4,8.832v5.11a1.75,1.75,0,0,0,1.75,1.75h20a1.75,1.75,0,0,0,1.75-1.75v-5.11A11.066,11.066,0,0,0,118.853,107.558Zm-7.353-13.2a6.477,6.477,0,1,1-6.477,6.477A6.484,6.484,0,0,1,111.5,94.361Zm8.25,25.389h-16.5v-3.36a7.56,7.56,0,0,1,3.88-6.6,9.856,9.856,0,0,0,8.74,0,7.56,7.56,0,0,1,3.88,6.6Z"
        className={styles.appLogoElem6 + (isActive ? ` ${styles.appLogoElem6Active}` : "")}
      ></path>
      <path
        d="M22.814,39.755a1.75,1.75,0,0,0,.3,2.456L48.255,61.878a1.75,1.75,0,1,0,2.156-2.756L25.271,39.455A1.749,1.749,0,0,0,22.814,39.755Z"
        className={styles.appLogoElem7 + (isActive ? ` ${styles.appLogoElem7Active}` : "")}
      ></path>
      <path
        d="M55.921,83.122l-26.5,20.75a1.75,1.75,0,0,0,2.158,2.756l26.5-20.75a1.75,1.75,0,1,0-2.158-2.756Z"
        className={styles.appLogoElem8 + (isActive ? ` ${styles.appLogoElem8Active}` : "")}
      ></path>
      <path
        d="M98.579,103.872l-26.5-20.75a1.75,1.75,0,0,0-2.158,2.756l26.5,20.75a1.75,1.75,0,1,0,2.158-2.756Z"
        className={styles.appLogoElem9 + (isActive ? ` ${styles.appLogoElem9Active}` : "")}
      ></path>
    </svg>
  );
};
export default AppLogoAnimated;
