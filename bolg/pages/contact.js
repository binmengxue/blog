import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, List, Icon, Breadcrumb } from "antd";
import Header from "../components/Header";
import "../static/style/pages/list.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import servicePath from "../config/apiUrl";
import axios from "axios";
const Contact = () => {
  return (
    <div>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>联系</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
export default Contact;
