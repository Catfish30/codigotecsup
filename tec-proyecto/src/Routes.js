import React from 'react'
import { Route } from 'react-router'
import CursosViews from './views/CursosViews'
import CrearCursoView from './views/CrearCursoView'
import EditarCursoView from './views/EditarCursoView'
import NotasView from './views/NotasView'

export default function Routes() {
    return (
        <div>
            <Route path='/' exact component={CursosViews} />
            <Route path='/crear' exact component={CrearCursoView} />
            <Route path="/editar/:id" exact component={EditarCursoView} />
            <Route path="/cursos/:id" exact component={NotasView} />
        </div>
    )
}
