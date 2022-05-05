
import Menu from '../../UIElements/Menu/Menu';
import { StyledCategoriesBar } from "./StyledCategoriesBar.styled";

const options = [
  {
    name: "Caini",
    options: [
      {
        title: "optiune1",
        link: "cai"
      },
      {
        title: "optiune2",
        link: "pisici"
      }
    ]
  },
  {
    name: "Pisici",
    options: [
      {
        title: "optiune3",
        link: "cai"
      },
      {
        title: "optiune4",
        link: "pisici"
      }
    ]
  },
  {
    name: "Rozatoare",
    options: [
      {
        title: "optiune5",
        link: "cai"
      },
      {
        title: "optiune6",
        link: "pisici"
      }
    ]
  },
  {
    name: "Iepuri",
    options: [
      {
        title: "optiune7",
        link: "cai"
      },
      {
        title: "optiune8",
        link: "pisici"
      }
    ]
  },
  {
    name: "Pasari",
    options: [
      {
        title: "optiune8",
        link: "cai"
      },
      {
        title: "optiune9",
        link: "pisici"
      }
    ]
  },
  {
    name: "Altele",
    options: [
      {
        title: "optiune10",
        link: "reptila"
      },
      {
        title: "optiune11",
        link: "reptila frate"
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
