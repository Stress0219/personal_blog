import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const Body = () => {
  return (
    <div className="bg-zinc-900 w-full h-full p-7">
      <div className="flex flex-col">
        <article className="text-xl align-middle text-center justify-center mt-5 mb-6 text-wrap leading-8">
          <p id="destacados" className="text-5xl text-blue-700 font-semibold mb-4">Destacados en la cueva</p>
          Sumérgete en los posts más valorados de mi cueva. Aquí
          encontrarás una colección curada de artículos y tutoriales que han
          capturado la atención y el interés de la comunidad. Desde guías
          detalladas y trucos útiles hasta análisis profundos de tecnologías
          emergentes, cada entrada está diseñada para ofrecerte valor y
          conocimiento. No te pierdas estos recursos imprescindibles que han
          dejado huella y siguen inspirando a programadores de todos los
          niveles. ¡Descubre qué hace que estos posts sean tan especiales y
          encuentra la inspiración que necesitas!
        </article>
        <div className="grid grid-cols-3 gap-y-6">
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: 2,
              backgroundColor: "rgb(63 63 70)",
            }}
            className="card bg-zinc-700 p-2 m-auto"
          >
            <CardActionArea className="hover:bg-zinc-600 hover:transition-all hover:ease-in">
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mamerto
                </Typography>
                <Typography variant="body2" className="text-white">
                  Mamertos are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className="font-bold hover:bg-[#D4AF37]">
                Share
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: 2,
              backgroundColor: "rgb(63 63 70)",
            }}
            className="bg-zinc-700 p-2 m-auto"
          >
            <CardActionArea className="hover:bg-zinc-600 hover:transition-all hover:ease-in">
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mamerto
                </Typography>
                <Typography variant="body2" className="text-white">
                  Mamertos are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className="font-bold hover:bg-[#D4AF37]">
                Share
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: 2,
              backgroundColor: "rgb(63 63 70)",
            }}
            className="bg-zinc-700 p-2 m-auto"
          >
            <CardActionArea className="hover:bg-zinc-600 hover:transition-all hover:ease-in">
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mamerto
                </Typography>
                <Typography variant="body2" className="text-white">
                  Mamertos are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className="font-bold hover:bg-[#D4AF37]">
                Share
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: 2,
              backgroundColor: "rgb(63 63 70)",
            }}
            className="bg-zinc-700 p-2 m-auto"
          >
            <CardActionArea className="hover:bg-zinc-600 hover:transition-all hover:ease-in">
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mamerto
                </Typography>
                <Typography variant="body2" className="text-white">
                  Mamertos are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className="font-bold hover:bg-[#D4AF37]">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Body;
