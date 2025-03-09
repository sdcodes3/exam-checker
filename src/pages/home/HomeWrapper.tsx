import React, { useEffect, useState } from "react";
import api from "../../api/api";

interface Paper {
  id: string;
  paper_name: string;
  subject: string;
  paper_link: string | null;
}

const HomeWrapper: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<Paper>({
    id: "",
    paper_name: "",
    subject: "",
    paper_link: null,
  });

  const fetchPaper = async () => {
    try {
      const response = await api.get("/paper");
      console.log("API called : ", response.data);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPaper();
  }, []);

  return <>Home Qrapper</>;
};

export default HomeWrapper;
