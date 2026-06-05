import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

type LibroCardProps = {
  titulo: string
  autor: string
  imagen: string
}

function LibroCard({ titulo, autor, imagen }: LibroCardProps) {
  const [likes, setLikes] = useState<number>(0)

  return (
    <div className="col">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text text-muted">{autor}</p>
          <div className="d-flex gap-2">
            <Button variant="outline-primary" size="sm">Ver más</Button>
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