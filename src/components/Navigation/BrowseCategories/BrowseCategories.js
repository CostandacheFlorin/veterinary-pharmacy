
import Menu from '../../UIElements/Menu/Menu';
import { StyledCategoriesBar } from "./StyledCategoriesBar.styled";

const options = [
  {
    name: "Caini",
    options: [
      {
        title: "Mancare",
        link: "caini/mancare"
      },
      {
        title: "Medicamente",
        link: "caini/medicamente"
      },{
        title: "Jucarii",
        link: "caini/jucarii"
      }
    ]
  },
  {
    name: "Pisici",
    options: [
      {
        title: "Mancare",
        link: "pisici/mancare"
      },
      {
        title: "Medicamente",
        link: "pisici/medicamente"
      },{
        title: "Jucarii",
        link: "pisici/jucarii"
      }
    ]
  },
  {
    name: "Rozatoare",
    options: [
      {
        title: "Mancare",
        link: "rozatoare/mancare"
      },
      {
        title: "Medicamente",
        link: "rozatoare/medicamente"
      },
      {
        title: "Jucarii",
        link: "rozatoare/jucarii"
      }
    ]
    
  },
  {
    name: "Pesti",
    options: [
      {
        title: "Mancare",
        link: "pesti/mancare"
      },
      {
        title: "Medicamente",
        link: "pesti/medicamente"
      }
    ]
  },
  {
    name: "Pasari",
    options: [
      {
        title: "Mancare",
        link: "pasari/mancare"
      },
      {
        title: "Medicamente",
        link: "pasari/medicamente"
      }
    ]
  },
  {
    name: "Altele",
    options: [
      {
        title: "Combatere daunatori",
        link: "daunatori"
      }
    ]
  },
  
]




const BrowseCategories = () => {
  return (
    <StyledCategoriesBar>
    {options.map(option => (
     
      <Menu key={option.name} name={option.name} options={option.options} />
    ))}
    
    </StyledCategoriesBar>
  );
};

export default BrowseCategories;
