import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import { BiCaretRightCircle } from "react-icons/bi";
import HotelSidebar from "../Components/HotelSidebar.js";

function Hotelplaylist() {
  return (
    <HotelSidebar>
      <div className="NavButton">
        <Navbar.Brand href="/" className="text-white">
          Compliance-Software
        </Navbar.Brand>

        <div className="float-end mt-2">
          <FaRegUserCircle color="#ffffff" fontSize="2em" />
          <h5 className="d-inline text-white " style={{ fontSize: "15px" }}>
            User Name (Alex)
          </h5>
        </div>
      </div>
      <div className="list m-2">
        <FaRegEdit color="#A09E9D" fontSize="2.1em" />
        <h5 className="d-inline" style={{ fontSize: "20px" }}>
          Hotel Playlist
        </h5>
      </div>
      <div className="playlist">
        <Row>
          <Col lg={8}>
            <video
              id="my-video"
              className="video-js vjs-theme-fantasy"
              controls
              preload="auto"
              height="auto"
              poster="https://wallpapercave.com/wp/wp3305861.jpg"
              data-setup="{}"
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider
                upgrading to a web browser that
                <a
                  href="https://videojs.com/html5-video-support/"
                  target="_blank"
                  rel="noreferrer"
                >
                  supports HTML5 video
                </a>
              </p>
            </video>
          </Col>

          <Col lg={4}>
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 01
                </h5>
              </div>
            </a>

            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1.1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 02
                </h5>
              </div>
            </a>

            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1.1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 03
                </h5>
              </div>
            </a>

            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1.1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 04
                </h5>
              </div>
            </a>

            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1.1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 05
                </h5>
              </div>
            </a>

            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box2 list m-2">
                <BiCaretRightCircle fontSize="1.1em" />
                <h5 className="d-inline" style={{ fontSize: "15px" }}>
                  Chapter - 06
                </h5>
              </div>
            </a>
          </Col>
        </Row>
        <div className="box2 list m-2">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classNameical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classNameical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </HotelSidebar>
  );
}

export default Hotelplaylist;
