import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type LibroCardProps = {
  id: number
  titulo: string
  autor: string
  imagen: string
}

function LibroCard({ id, titulo, autor, imagen }: LibroCardProps) {
  const [likes, setLikes] = useState<number>(0)

  return (
    <div className="col">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text text-muted">{autor}</p>
          <div className="d-flex gap-2">
            <Button as={Link} to={`/libros/${id}`} variant="outline-primary" size="sm">Ver más</Button>
            <Button variant="outline-danger" size="sm" onClick={() => setLikes(likes + 1)}>
              ❤ {likes}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LibroCard