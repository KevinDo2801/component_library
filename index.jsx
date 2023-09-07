import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu/index";
import Star from "./components/Star";
import Badges from "./components/Badges";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonial from "./components/Testimonial/index";

function App() {
  return (
    <div>
      <section className="menu">
        <h2>Menu Component</h2>
        <Menu onOpen={() => console.log("Opened/closed")}>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </section>

      <section className="star-">
        <h2>Star component</h2>
        <Star />
      </section>

      <section className="badges">
        <h2>Badges component</h2>

        <h3 className="badge-title">Square</h3>
        <Badges variant="gray">Gray</Badges>
        <Badges variant="red">Red</Badges>
        <Badges variant="yellow">Gray</Badges>
        <Badges variant="green">Red</Badges>
        <Badges variant="blue">Gray</Badges>
        <Badges variant="indigo">Red</Badges>
        <Badges variant="purple">Gray</Badges>
        <Badges variant="pink">Red</Badges>

        <h3 className="badge-title">Pill</h3>
        <Badges variant="gray pill">Gray</Badges>
        <Badges variant="red pill">Red</Badges>
        <Badges variant="yellow pill">Gray</Badges>
        <Badges variant="green pill">Red</Badges>
        <Badges variant="blue pill">Gray</Badges>
        <Badges variant="indigo pill">Red</Badges>
        <Badges variant="purple pill">Gray</Badges>
        <Badges variant="pink pill">Red</Badges>
      </section>

      <section className="banner-">
        <h2>Banner component</h2>
        <h3 className="badge-title">MULTI LINE</h3>
        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Description>
        </Banner>

        <Banner status="attention">
          <Banner.Title>Attention!</Banner.Title>
          <Banner.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Description>
        </Banner>

        <Banner status="error">
          <Banner.Title>There is a problem with your application</Banner.Title>
          <Banner.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Description>
        </Banner>

        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
          <Banner.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner.Description>
        </Banner>

        <h3 className="badge-title">SINGLE LINE</h3>
        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
        </Banner>

        <Banner status="attention">
          <Banner.Title>Attention!</Banner.Title>
        </Banner>

        <Banner status="error">
          <Banner.Title>There is a problem with your application</Banner.Title>
        </Banner>

        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
        </Banner>
      </section>

      <section className="cards">
        <h2>Card component</h2>
        <Card icon="" iconBackgroundColor="">
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Description>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
          </Card.Description>
        </Card>
      </section>

      <section className="testimonials">
        <h2>Testimonials component</h2>
        <Testimonial imgName='testimonials.jpg'>
          <Testimonial.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
          </Testimonial.Description>
          <Testimonial.Name>May Andersons</Testimonial.Name>
          <Testimonial.Position>Workcation, CTO</Testimonial.Position>
        </Testimonial>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
