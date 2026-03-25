import { groq } from 'next-sanity'

export const HERO_QUERY = groq`*[_type == "hero"][0]`

export const ABOUT_QUERY = groq`*[_type == "about"][0]`

export const SERVICES_QUERY = groq`*[_type == "service"]`

export const TEAM_QUERY = groq`*[_type == "team"][0]`

export const CONTACT_QUERY = groq`*[_type == "contact"][0]`
