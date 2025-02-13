import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { shoesApi } from '../services/api';
import { Shoe, ShoeFilters } from '../types';

export function useShoes() {
    const queryClient = useQueryClient();

    const shoes = useQuery({
        queryKey: ['shoes'],
        queryFn: () => shoesApi.getAll().then(res => res.data)
    });

    const shoe = (id: string) => useQuery({
        queryKey: ['shoes', id],
        queryFn: () => shoesApi.getById(id).then(res => res.data)
    });

    const searchShoes = (filters: ShoeFilters) => useQuery({
        queryKey: ['shoes', 'search', filters],
        queryFn: () => shoesApi.search(filters).then(res => res.data)
    });

    const createShoe = useMutation({
        mutationFn: (data: Omit<Shoe, 'id'>) => shoesApi.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoes'] });
        }
    });

    const updateShoe = useMutation({
        mutationFn: ({ id, data }: { id: string; data: Partial<Shoe> }) => 
            shoesApi.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoes'] });
        }
    });

    const deleteShoe = useMutation({
        mutationFn: (id: string) => shoesApi.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoes'] });
        }
    });

    return {
        shoes,
        shoe,
        searchShoes,
        createShoe,
        updateShoe,
        deleteShoe
    };
} 