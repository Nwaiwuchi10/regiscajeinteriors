import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "react-bootstrap/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import { FaCheckSquare, FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { projectApi, projectDeleteApi } from "../Data/Api";
import CreateLayout from "./CraeteLayout";
import { Container } from "react-bootstrap";
import CircularIndeterminate from "../components/Loading/Progress";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function ViewProject() {
  const navigate = useNavigate();
  const [ViewScratchCards, setViewScratchCards] = React.useState([]);
  const [Numbers, setNumbers] = React.useState<any>([]);

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(projectApi);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setViewScratchCards(data);
      setNumbers(Array.from({ length: data.length }, (_, index) => index + 1));
    };

    fetchPosts();
  }, []);
  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const handleDelete = async (id: any) => {
    setLoading(true);
    await axios.delete(projectDeleteApi + id);

    setViewScratchCards(
      ViewScratchCards.filter((p: any, row: any) => p._id !== row._id)
    );
    setLoading(false);
    navigate("/view");
    window.location.reload();
  };
  return (
    <CreateLayout>
      <Container>
        <div
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}
        >
          <Table responsive striped bordered>
            <thead
              style={{
                backgroundColor: "#e53238",
                color: "white",
                fontSize: "medium",
                fontWeight: "500",
              }}
            >
              <tr>
                <th>No:</th>
                <th>Image </th>
                <th>Title</th>
                <th>Delete</th>
                {/* <th>User Type</th> */}
              </tr>
            </thead>
            <tbody>
              {ViewScratchCards?.slice(0, 10).map((row: any, i: any) => (
                <>
                  <tr key={i}>
                    <td>{Numbers[i]}</td>
                    <td style={{ width: "6%", height: "10vh" }}>
                      <img
                        src={row?.image}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />{" "}
                    </td>
                    <td>{row?.title}</td>
                    {loading ? (
                      <>
                        <CircularIndeterminate />
                      </>
                    ) : (
                      <>
                        <td>
                          {" "}
                          <Button
                            className="btn-sm"
                            // onSubmit={handleLoader}
                            onClick={() => handleDelete(row._id)}
                          >
                            <FaTrash />
                          </Button>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </CreateLayout>
  );
}
