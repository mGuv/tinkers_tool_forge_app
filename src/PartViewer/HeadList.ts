import HeadPart from '../Materials/Parts/HeadPart';

interface HeadPartData {
    Name: string,
    Attack: number,
    Durability: number,
    "Harvest Level": number,
    "Harvest Speed": number,
    Traits: string
}

export const columns: (keyof HeadPartData | [keyof HeadPartData, boolean])[] = ["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits"];
export const dataTransformer = (part: HeadPart) => ({
    Name: part.Material.Name,
    Attack: part.Attack,
    Durability: part.Durability,
    "Harvest Level": part.HarvestLevel,
    "Harvest Speed": part.MiningSpeed,
    Traits: part.Traits.join(", ")
});
