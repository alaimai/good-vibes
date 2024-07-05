import { useQuery } from '@tanstack/react-query'
import { getImages } from '../apiClient'
import LoadingSpinner from './LoadingSpinner'

export function useImages() {
  return useQuery<string[], Error>({
    queryKey: ['images'],
    queryFn: getImages,
  })
}

export default function DisplayImages() {
  const { data, isLoading, isError } = useImages()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Something went wrong while fetching images!</p>
  }

  return (
    <div>
      <h2>Images:</h2>
      <div>{data?.map((url) => <img key={url} src={url} alt="calm" />)}</div>
    </div>
  )
}
