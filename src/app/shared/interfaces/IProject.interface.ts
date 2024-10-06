export interface IProjects {
  title: string,
  cover: string,
  video: string
  img: Array<string>,
  description: string,
  technologies: Array<string>,
  extraTools: Array<string | never>,
  deploy: IDeploy,
  metaTag: string[]
}

export interface IDeploy {
  repository: string,
  path: string,
  platform: string,
  icon: string,
}

export interface IDataLink {
  name: string,
  repositoryLink: string,
  demoLink: string,
}
