"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Divider, Modal, TextField } from "@mui/material";
import React from "react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<div className="MuiDivider-wrapper">
				<Button>
					click here if you're cool
				</Button>
			</div>
			<Box>
				<Grid container spacing={2}>
					<Card>
						<p>Component Test</p>
						<CardActions>
							<Link
								href={{
									pathname: "list",
								}}
							>
								<Button>schmedit</Button>
							</Link>
						</CardActions>
					</Card>
				</Grid>
			</Box>

			<div>
				<Box>
					<Divider />
					<Divider />
					<TextField id="outlined-basic" />
					<Divider />
					<TextField id="outlined-basic" />
					<Divider />
					<Button>
						mhmm
					</Button>
				</Box>
			</div>
		</div>
	);
}
