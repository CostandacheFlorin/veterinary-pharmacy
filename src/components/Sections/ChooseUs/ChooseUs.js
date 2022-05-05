
import SpeedIcon from "@mui/icons-material/Speed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GradingIcon from "@mui/icons-material/Grading";
import ChooseUsReason from "../../UIElements/ChooseUsReason/ChooseUsReason";
import { ChooseStyled } from "./ChooseUs.styled";


const ChooseUs = () => {
  return (
    <ChooseStyled>
     


      <ChooseUsReason
        header={"Livrari rapide si de incredere"}
        icon={<SpeedIcon />}
        text={
          "Oferim clientilor nostrii cele mai rapide livrari, in maxim 2 zile lucratoare in functie de adresa. Serviciile de curierat puse la dispozitie de catre echipa noastra fac usoara urmarirea pachetului pe parcusul livrarii."
        }
      />

      <ChooseUsReason
        header={"Preturi accesibile"}
        icon={<AttachMoneyIcon />}
        text={
          "Ne-am asigurat ca preturile noastre sa fie accesibile pentru ca animalul tau sa poata fi fericit incontinuare"
        }
      />

      <ChooseUsReason
        header={"Gama variata de produse"}
        icon={<GradingIcon />}
        text={
          "Ne bucuram ca farmacia noastra dispune de o gama foarte variata de produse, destinata pentru toate tipurile de animale si afectiunile acestora"
        }
      />
    </ChooseStyled>
  );
};

export default ChooseUs;
