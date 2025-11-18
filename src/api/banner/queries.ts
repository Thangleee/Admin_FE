import type { BannerSchema } from '@/modules/BannerManagementPage/libs/validators';
import { createMutation, createQuery } from 'react-query-kit';
import { createBanner, deleteBanner, getBannerById, getBanners, updateBanner } from './requests';
import type { IBanner, IBannerQuery, IBannerResponse } from './types';

export const useBanners = createQuery<IBannerResponse, Partial<IBannerQuery>>({
  queryKey: ['admin/banners'],
  fetcher: (params) => getBanners(params),
});

export const useBannerByIdQuery = createQuery<IBanner, string>({
  queryKey: ['banner'],
  fetcher: (id) => getBannerById(id),
});
export const useCreateBannerMutation = createMutation<IBanner, BannerSchema>({
  mutationFn: (data) => createBanner(data),
});

export const useUpdateBannerMutation = createMutation<IBanner, { id: string; formData: Partial<BannerSchema> }>({
  mutationFn: ({ id, formData }) => updateBanner({ id, formData }),
});
export const useDeleteBannerMutation = createMutation<void, string>({
  mutationFn: (id) => deleteBanner(id),
});
