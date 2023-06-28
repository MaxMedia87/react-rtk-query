import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products'], //Называем как угодно, для понимания с какими сущностями рабоатем
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: (build) => ({
        getGoods: build.query({
            query: (limit = '') => `goods?${limit && `_limit=${limit}`}`,
            //Данная функция аналогична везде из документации
            providesTags: (result) =>
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'Products', id })),
                  { type: 'Products', id: 'LIST' },
                ]
              : [{ type: 'Products', id: 'LIST' }],
        }),
        //Create Update Delete Operation
        addProduct: build.mutation({
            query: (body) => ({
                url: 'goods',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `goods/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    })
});

export const {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation} = goodsApi;