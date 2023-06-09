PGDMP     7                    {         	   crud-blog    15.3    15.3 %    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    24576 	   crud-blog    DATABASE     �   CREATE DATABASE "crud-blog" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Indonesian_Indonesia.1252';
    DROP DATABASE "crud-blog";
                postgres    false            �            1259    24824    Brand    TABLE     Q   CREATE TABLE public."Brand" (
    id integer NOT NULL,
    name text NOT NULL
);
    DROP TABLE public."Brand";
       public         heap    postgres    false            �            1259    24823    Brand_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Brand_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Brand_id_seq";
       public          postgres    false    222            (           0    0    Brand_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Brand_id_seq" OWNED BY public."Brand".id;
          public          postgres    false    221            �            1259    24601    Category    TABLE     T   CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL
);
    DROP TABLE public."Category";
       public         heap    postgres    false            �            1259    24600    Category_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Category_id_seq";
       public          postgres    false    218            )           0    0    Category_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;
          public          postgres    false    217            �            1259    24591    Post    TABLE       CREATE TABLE public."Post" (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "categoryId" integer NOT NULL
);
    DROP TABLE public."Post";
       public         heap    postgres    false            �            1259    24590    Post_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Post_id_seq";
       public          postgres    false    216            *           0    0    Post_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;
          public          postgres    false    215            �            1259    24815    Product    TABLE     �   CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    "brandId" integer NOT NULL
);
    DROP TABLE public."Product";
       public         heap    postgres    false            �            1259    24814    Product_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Product_id_seq";
       public          postgres    false    220            +           0    0    Product_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;
          public          postgres    false    219            �            1259    24579    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            ~           2604    24827    Brand id    DEFAULT     h   ALTER TABLE ONLY public."Brand" ALTER COLUMN id SET DEFAULT nextval('public."Brand_id_seq"'::regclass);
 9   ALTER TABLE public."Brand" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            |           2604    24604    Category id    DEFAULT     n   ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);
 <   ALTER TABLE public."Category" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            z           2604    24594    Post id    DEFAULT     f   ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);
 8   ALTER TABLE public."Post" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            }           2604    24818 
   Product id    DEFAULT     l   ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);
 ;   ALTER TABLE public."Product" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            !          0    24824    Brand 
   TABLE DATA           +   COPY public."Brand" (id, name) FROM stdin;
    public          postgres    false    222   �(                 0    24601    Category 
   TABLE DATA           .   COPY public."Category" (id, name) FROM stdin;
    public          postgres    false    218   �(                 0    24591    Post 
   TABLE DATA           \   COPY public."Post" (id, title, content, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public          postgres    false    216   )                 0    24815    Product 
   TABLE DATA           ?   COPY public."Product" (id, name, price, "brandId") FROM stdin;
    public          postgres    false    220   a)                 0    24579    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   ~)       ,           0    0    Brand_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Brand_id_seq"', 1, false);
          public          postgres    false    221            -           0    0    Category_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Category_id_seq"', 5, true);
          public          postgres    false    217            .           0    0    Post_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Post_id_seq"', 13, true);
          public          postgres    false    215            /           0    0    Product_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Product_id_seq"', 1, false);
          public          postgres    false    219            �           2606    24831    Brand Brand_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Brand"
    ADD CONSTRAINT "Brand_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Brand" DROP CONSTRAINT "Brand_pkey";
       public            postgres    false    222            �           2606    24608    Category Category_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Category" DROP CONSTRAINT "Category_pkey";
       public            postgres    false    218            �           2606    24599    Post Post_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Post" DROP CONSTRAINT "Post_pkey";
       public            postgres    false    216            �           2606    24822    Product Product_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public            postgres    false    220            �           2606    24587 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    24609    Post Post_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 G   ALTER TABLE ONLY public."Post" DROP CONSTRAINT "Post_categoryId_fkey";
       public          postgres    false    218    3204    216            �           2606    24832    Product Product_brandId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public."Brand"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 J   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_brandId_fkey";
       public          postgres    false    222    3208    220            !      x������ � �         <   x�3���2�����2��rsv��2�rutQ�
�2��qrs������ 2N         I   x�3�)-�/�L�Q��,�(PHLI�I�P�4202�50"#+c+C=S#tq 2�314�4����� ss            x������ � �         �   x�m�An1E�3���0`�C��"c���P'�%�>Oz�9-V	�Y'����H���1�d؈�R{_Aݒy���h ���ٌD��8hH�J.J����V�������Ղ��h<�?�|Bv���	�ɾ���s�V�Y#�sZK<	�Ҏ�gcH��,�}�EL�5PWx��C���f� �-�&v��~�M�����R����~�����~Xw     