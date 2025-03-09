import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Home from "./Home";
import { Paper } from "../../types/types";
import Loader from "../../components/loader/Loader";

const HomeWrapper: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<Paper>({
    id: "",
    paper_name: "",
    subject: "",
    paper_link: null,
  });

  const [papers, setPapers] = useState<Paper[]>([]);

  const [screen, setScreen] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPaper = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/paper");

      setPapers(response.data);
    } catch (error) {
      console.error("Error in fetching Paper : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaper();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {screen === 0 ? (
        <div className="overflow-x-auto p-4">
          <div className="text-center text-lg font-semibold py-4">
            Question Papers
          </div>
          <table className="w-full border-separate border border-gray-400 table-fixed">
            <thead>
              <tr>
                <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                  Paper Name
                </td>
                <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                  Subject
                </td>
              </tr>
            </thead>
            <tbody>
              {papers.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    setSelectedPaper(item);
                    setScreen(1);
                  }}
                  className="cursor-pointer"
                >
                  <td
                    className={`text-center border border-gray-300 text-gray-700 p-1`}
                  >
                    {item.paper_name}
                  </td>
                  <td
                    className={`text-center border border-gray-300 text-gray-700 p-1`}
                  >
                    {item.subject}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Home selectedPaper={selectedPaper} />
      )}
    </>
  );
};

export default HomeWrapper;
