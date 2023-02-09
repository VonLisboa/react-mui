import { IconButton } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BallotIcon from "@mui/icons-material/Ballot";

export default function Ttable(props: any) {
  return (
    <div>
      <IconButton color="secondary" sx={{borderRadius: 1, border: "1px solid #ccc" }}>
        <FormatListBulletedIcon fontSize="medium" />
      </IconButton>
      <IconButton color="secondary" sx={{borderRadius: 1, border: "1px solid #ccc" }}>
        <BallotIcon fontSize="medium" />
      </IconButton>
    </div>
  );
}
