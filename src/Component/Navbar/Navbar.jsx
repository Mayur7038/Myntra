import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../../image/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const changeBck = () => {
    document.getElementById("navbarSearch").style.backgroundColor = "white";
    document.getElementById("navbarSearch").style.border =
      "1px solid rgb(227, 227, 228);";
  };
  return (
    <>
      <div id="navbar">
        <div id="left">
          <div>
            <img id="logo" src={logo}></img>
          </div>
          <div id="men">
            <h5> MEN </h5>
            <div className="mens">
              <div>
                <ul>
                  <p id="head1"> Topwear </p>
                  <li>T-Shirts </li>
                  <li>Casual Shirts</li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Jackets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Indian & Festive Wear </p>
                  <li> Kurtas & Kurtas Sets </li>
                  <li> Sherwanis </li>
                  <li> Nehru Jackets </li>
                  <li> Dhotis </li>
                </ul>
              </div>
              <div id="changesr">
                <ul>
                  <p id="head1"> Bottomwear </p>
                  <li> jeans </li>
                  <li> Casual Trousers </li>
                  <li> Formal Trousers </li>
                  <li> Shorts </li>
                  <li> Sweaters</li>
                  <li> Track Pants & joggers </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Innerwear & Sleepwear </p>
                  <li> Briefs & Trunks </li>
                  <li> Boxers </li>
                  <li> Vests </li>
                  <li> Sleepware </li>
                  <li> Thermals </li>
                </ul>
                <ul>
                  <p id="head1"> Plus Size </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Footwear </p>
                  <li> Casual Shoes </li>
                  <li> Sports Shoes </li>
                  <li> Formal Shoes </li>
                  <li> Sneakers </li>
                  <li> Sandels & Floaters </li>
                  <li> Flip Flops </li>
                  <li> Socks </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Personal Care & Grooming </p>
                </ul>
                <ul>
                  <p id="head1"> Sunglasses & Frames </p>
                </ul>
                <ul>
                  <p id="head1"> Watches </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Sports & Active Wear </p>
                  <li> Sports Shoes </li>
                  <li> Sandals</li>
                  <li> Active Shirts </li>
                  <li> Tracksuits </li>
                  <li> Swimear </li>
                  <li> Jacets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Gadgets </p>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Fashion Acessories </p>
                  <li> Wallets </li>
                  <li> Belts & Body Mists </li>
                  <li> Trimmers </li>
                  <li> Deaodrants </li>
                  <li> Caps & Hats </li>
                  <li> Phone Cases </li>
                  <li> Helmets </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Bags & Backpacks </p>
                </ul>

                <ul>
                  <p id="head1"> Luggages & Trolleys </p>
                </ul>
              </div>
            </div>
          </div>
          <div id="womens">
            <h5> WOMEN </h5>

            <div className="womens">
              <div>
                <ul>
                  <p id="head2"> Indian & Fusion Wear </p>
                  <li> Kurtas </li>
                  <li>  Shirts</li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Jackets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head2"> Belts , Scarves & More </p>
                  
                </ul>



              </div>
              <div>
                <ul>
                  <p id="head2"> Wetern Wear </p>
                  <li> jeans </li>
                  <li> Casual Trousers </li>
                  <li> Formal Trousers </li>
                  <li> Shorts </li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Sweaters</li>
                  <li> Active Shirts </li>
                  <li> Tracksuits </li>
                  <li> Track Pants & joggers </li>
                </ul>

              
              </div>
              <div>
                <ul>
                  <p id="head2"> Maternity </p>
                </ul>
                <ul>
                  <p id="head2"> Sunglasses </p>
                </ul>
                <ul>
                  <p id="head2"> Footwear </p>
                  <li> Casual Shoes </li>
                  <li> Sports Shoes </li>
                  <li> Formal Shoes </li>
                  <li> Sneakers </li>
                  <li> Sandels & Floaters </li>
                  <li> Flip Flops </li>
                  <li> Socks </li>
                </ul>
                <hr />
                <ul>
                  <p id="head2"> Sports & Active Wear </p>
                  <li> Sports Shoes </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>

               
              </div>
              <div>
                <ul>
                  <p id="head2"> Lingerie & Sleepwear </p>
                  <li> Bra </li>
                  <li> Briefs </li>
                  <li> Shapwear </li>
                  <li> Sleepwear & Loungewear </li>
                  <li> Swimmer </li>
                  <li> Camisols </li>
                 
                </ul>
                <hr />

                <ul>
                  <p id="head2"> Beauty & Personal Care </p>
                  <li> Makeup </li>
                  <li> Skincare </li>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head2"> Gadgets </p>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head2"> Jewellery </p>
                </ul>

                <ul>
                  <p id="head2"> Backpacks </p>
                </ul>
                <ul>
                  <p id="head2"> HandBags, Bags &  Wallets </p>
                </ul>
                <ul>
                  <p id="head2"> Luggages & Trolleys </p>
                </ul>
              </div>
            </div>
          </div>

          <div id="kids">
            <h5> KIDS </h5>
            <div className="kids">
              <div>
                <ul>
                  <p id="head1"> Topwear </p>
                  <li>T-Shirts </li>
                  <li>Casual Shirts</li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Jackets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Indian & Festive Wear </p>
                  <li> Kurtas & Kurtas Sets </li>
                  <li> Sherwanis </li>
                  <li> Nehru Jackets </li>
                  <li> Dhotis </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Bottomwear </p>
                  <li> jeans </li>
                  <li> Casual Trousers </li>
                  <li> Formal Trousers </li>
                  <li> Shorts </li>
                  <li> Sweaters</li>
                  <li> Track Pants & joggers </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Innerwear & Sleepwear </p>
                  <li> Briefs & Trunks </li>
                  <li> Boxers </li>
                  <li> Vests </li>
                  <li> Sleepware </li>
                  <li> Thermals </li>
                </ul>
                <ul>
                  <p id="head1"> Plus Size </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Footwear </p>
                  <li> Casual Shoes </li>
                  <li> Sports Shoes </li>
                  <li> Formal Shoes </li>
                  <li> Sneakers </li>
                  <li> Sandels & Floaters </li>
                  <li> Flip Flops </li>
                  <li> Socks </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Personal Care & Grooming </p>
                </ul>
                <ul>
                  <p id="head1"> Sunglasses & Frames </p>
                </ul>
                <ul>
                  <p id="head1"> Watches </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Sports & Active Wear </p>
                  <li> Sports Shoes </li>
                  <li> Sandals</li>
                  <li> Active Shirts </li>
                  <li> Tracksuits </li>
                  <li> Swimear </li>
                  <li> Jacets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Gadgets </p>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head1"> Fashion Acessories </p>
                  <li> Wallets </li>
                  <li> Belts & Body Mists </li>
                  <li> Trimmers </li>
                  <li> Deaodrants </li>
                  <li> Caps & Hats </li>
                  <li> Phone Cases </li>
                  <li> Helmets </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head1"> Bags & Backpacks </p>
                </ul>

                <ul>
                  <p id="head1"> Luggages & Trolleys </p>
                </ul>
              </div>
            </div>
          </div>
          <div id="homes">
            <h5> HOME&LIVING </h5>
            <div className="homes">
              <div>
                <ul>
                  <p id="head3"> Topwear </p>
                  <li>T-Shirts </li>
                  <li>Casual Shirts</li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Jackets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head3"> Indian & Festive Wear </p>
                  <li> Kurtas & Kurtas Sets </li>
                  <li> Sherwanis </li>
                  <li> Nehru Jackets </li>
                  <li> Dhotis </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head3"> Bottomwear </p>
                  <li> jeans </li>
                  <li> Casual Trousers </li>
                  <li> Formal Trousers </li>
                  <li> Shorts </li>
                  <li> Sweaters</li>
                  <li> Track Pants & joggers </li>
                </ul>
                <hr />

                <ul>
                  <p id="head3"> Innerwear & Sleepwear </p>
                  <li> Briefs & Trunks </li>
                  <li> Boxers </li>
                  <li> Vests </li>
                  <li> Sleepware </li>
                  <li> Thermals </li>
                </ul>
                <ul>
                  <p id="head3"> Plus Size </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head3"> Footwear </p>
                  <li> Casual Shoes </li>
                  <li> Sports Shoes </li>
                  <li> Formal Shoes </li>
                  <li> Sneakers </li>
                  <li> Sandels & Floaters </li>
                  <li> Flip Flops </li>
                  <li> Socks </li>
                </ul>
                <hr />

                <ul>
                  <p id="head3"> Personal Care & Grooming </p>
                </ul>
                <ul>
                  <p id="head3"> Sunglasses & Frames </p>
                </ul>
                <ul>
                  <p id="head3"> Watches </p>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head3"> Sports & Active Wear </p>
                  <li> Sports Shoes </li>
                  <li> Sandals</li>
                  <li> Active Shirts </li>
                  <li> Tracksuits </li>
                  <li> Swimear </li>
                  <li> Jacets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head3"> Gadgets </p>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head3"> Fashion Acessories </p>
                  <li> Wallets </li>
                  <li> Belts & Body Mists </li>
                  <li> Trimmers </li>
                  <li> Deaodrants </li>
                  <li> Caps & Hats </li>
                  <li> Phone Cases </li>
                  <li> Helmets </li>
                  <li> Rain Jackets </li>
                </ul>
                
              </div>
            </div>
          </div>
          <div id="beauty">
            <h5> BEAUTY </h5>
            <div className="beauties">
              <div>
                <ul>
                  <p id="head4"> Indian & Fusion Wear </p>
                  <li> Kurtas </li>
                  <li>  Shirts</li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Jackets </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head4"> Belts , Scarves & More </p>
                  
                </ul>



              </div>
              <div>
                <ul>
                  <p id="head4"> Wetern Wear </p>
                  <li> jeans </li>
                  <li> Casual Trousers </li>
                  <li> Formal Trousers </li>
                  <li> Shorts </li>
                  <li> Formal Shirts </li>
                  <li> SweatShirts </li>
                  <li> Sweaters</li>
                  <li> Sweaters</li>
                  <li> Active Shirts </li>
                  <li> Tracksuits </li>
                  <li> Track Pants & joggers </li>
                </ul>

              
              </div>
              <div>
                <ul>
                  <p id="head4"> Maternity </p>
                </ul>
                <ul>
                  <p id="head4"> Sunglasses </p>
                </ul>
                <ul>
                  <p id="head4"> Footwear </p>
                  <li> Casual Shoes </li>
                  <li> Sports Shoes </li>
                  <li> Formal Shoes </li>
                  <li> Sneakers </li>
                  <li> Sandels & Floaters </li>
                  <li> Flip Flops </li>
                  <li> Socks </li>
                </ul>
                <hr />
                <ul>
                  <p id="head4"> Sports & Active Wear </p>
                  <li> Sports Shoes </li>
                  <li> Blazers & Coats </li>
                  <li> Suits </li>
                  <li> Rain Jackets </li>
                </ul>

               
              </div>
              <div>
                <ul>
                  <p id="head4"> Lingerie & Sleepwear </p>
                  <li> Bra </li>
                  <li> Briefs </li>
                  <li> Shapwear </li>
                  <li> Sleepwear & Loungewear </li>
                  <li> Swimmer </li>
                  <li> Camisols </li>
                 
                </ul>
                <hr />

                <ul>
                  <p id="head4"> Beauty & Personal Care </p>
                  <li> Makeup </li>
                  <li> Skincare </li>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                </ul>
              </div>
              <div>
                <ul>
                  <p id="head4"> Gadgets </p>
                  <li> Headphoes </li>
                  <li> Speakers </li>
                  <li> Smart Wearables </li>
                  <li> Fitness Gadgets </li>
                </ul>
                <hr />

                <ul>
                  <p id="head4"> Jewellery </p>
                </ul>

                <ul>
                  <p id="head4"> Backpacks </p>
                </ul>
                <ul>
                  <p id="head4"> HandBags, Bags &  Wallets </p>
                </ul>
                <ul>
                  <p id="head4"> Luggages & Trolleys </p>
                </ul>
              </div>
            </div>
          </div>
          <div id="studio">
            <h5> STUDIO </h5>
            <div className="studioes">
              <img id="firstone" src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" alt="" />
              <img id="studioimg" src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" />
            </div>
          </div>
        </div>
        <div id="middle">
          <input
            id="navbarSearch"
            type="text"
            placeholder="Search for products brands and many more"
            onClick={changeBck}
          />
        </div>
        <div id="right">
          <div>
            <PersonOutlineIcon
              className="icons"
              sx={{
                fontSize: "30px",
                color: "rgb(56, 56, 56)",
                marginTop: "10px",
              }}
            />
            <p className="suggest">Profile </p>
          </div>
          <div>
            <FavoriteBorderIcon
              className="icons"
              sx={{
                fontSize: "30px",
                color: "rgb(56, 56, 56)",
                marginTop: "10px",
              }}
            />
            <p className="suggest"> WishList</p>
          </div>
          <div>
            <ShoppingBagOutlinedIcon
              className="icons"
              sx={{
                fontSize: "30px",
                color: "rgb(56, 56, 56)",
                marginTop: "10px",
              }}
            />
            <p className="suggest"> Bag </p>
          </div>
        </div>
      </div>
    </>
  );
};
