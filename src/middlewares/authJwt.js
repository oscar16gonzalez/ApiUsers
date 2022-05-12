import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'
import Users from '../models/Users'

// verifica los tokens 
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        if(!token) return res.status(403).json({ message: 'No token provied'})

        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id
    
        const users = await Users.findById(req.userId, {password: 0})
        if(!users) return res.status(404).json({ message: 'No user found'})

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized'})
    }
}

//verifica los roles 
export const SuperAdmin = async (req, res, next) => {
  const user = await Users.findById(req.userId)
  const roles = await Role.find({_id: {$in: user.roles}}  )

    for (let i = 0; i < roles.length; i++){
        if(roles[i].name === "Super Admin "){
            next()
            return;
        }

        return res.status(403).json({
            message: 'require Super admin role'
        })
    }

  //next()
}


export const AuxAdmin = async (req, res, next) => {
    const user = await Users.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}}  )
  
      for (let i = 0; i < roles.length; i++){
          if(roles[i].name === "Aux Admin "){
              next()
              return;
          }
  
          return res.status(403).json({
              message: 'require Super admin role'
          })
      }
  
    next()
}


export const isResidente = async (req, res, next) => {

}


export const isSS_GSST = async (req, res, next) => {

}