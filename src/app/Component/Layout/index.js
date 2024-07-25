"use client"
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';

export default function Layouts({ children }) {
  const [menuTemeSettingData, setMenuThemeSettingData] = useState();
  async function menuTemeSettingApi() {
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get_menus_and_theme_setting_data`)
      .then(await function (response) {
        if (response && response?.data) {
          setMenuThemeSettingData(response?.data?.menu_theme_settings_data)
          // console.log('AAAAA111111',response?.data?.menu_theme_settings_data)
        }
      })
      .catch(await function (error) {
      })
      .finally(() => {
        console.log('Experiment completed');
      });
  };
  useEffect(() => {
    menuTemeSettingApi()

  }, [10000]);
  return (
    <main>
      <Header menuTemeSettingData={menuTemeSettingData} />
      <main>
        {children}
      </main>
      <Footer menuTemeSettingData={menuTemeSettingData} />
    </main>
  );
}
