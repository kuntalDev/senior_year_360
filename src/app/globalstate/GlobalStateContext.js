import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context
export const MenuThemeContext = createContext();

// Create a Provider component
export const MenuThemeProvider = ({ children }) => {
  const [menuThemeSettingData, setMenuThemeSettingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  async function fetchMenuThemeSettingData() {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get_menus_and_theme_setting_data`);
      if (response?.data) {
        setMenuThemeSettingData(response.data.menu_theme_settings_data);
      }
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    } finally {
      setLoading(false);
      console.log('API call completed');
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchMenuThemeSettingData();
  }, []);

  return (
    <MenuThemeContext.Provider value={{ menuThemeSettingData}}>
      {children}
    </MenuThemeContext.Provider>
  );
};
